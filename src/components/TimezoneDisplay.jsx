import React, { useState, useEffect } from "react";
import "./TimezoneDisplay.css";

const TimezoneDisplay = () => {
  const [timezones, setTimezones] = useState([]);
  const [currentTimes, setCurrentTimes] = useState({});
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    // Detect user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get timezone offset for calculating difference
    const getOffset = (tz) => {
      const date = new Date();
      const tzString = date.toLocaleString("en-US", { timeZone: tz });
      const tzDate = new Date(tzString);
      return (tzDate - date) / (1000 * 60); // difference in minutes
    };

    const istOffset = getOffset("Asia/Kolkata");
    const userOffset = getOffset(userTimezone);
    const diffMinutes = Math.abs(istOffset - userOffset);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffMins = diffMinutes % 60;

    // Format time difference
    let timeDiff = "";
    if (diffHours === 0 && diffMins === 0) {
      timeDiff = "No time difference! 🎉";
    } else {
      timeDiff = `${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
      if (diffMins > 0) {
        timeDiff += ` ${diffMins} min${diffMins !== 1 ? "s" : ""}`;
      }
      timeDiff += " difference";
    }
    setTimeDifference(timeDiff);

    // Get user-friendly timezone name
    const getUserLocationName = (tz) => {
      try {
        // Extract city from timezone (e.g., "America/New_York" -> "New York")
        const parts = tz.split("/");
        if (parts.length > 1) {
          return parts[parts.length - 1].replace(/_/g, " ");
        }
        return tz;
      } catch {
        return "Your Location";
      }
    };

    const userLocationName = getUserLocationName(userTimezone);

    // Get GMT offset string
    const getGMTOffset = (tz) => {
      const date = new Date();
      const offset =
        -date
          .toLocaleString("en-US", {
            timeZone: tz,
            timeZoneName: "shortOffset",
          })
          .match(/GMT([+-]\d+)/)?.[1] ||
        (() => {
          // Fallback method
          const tzString = date.toLocaleString("en-US", { timeZone: tz });
          const tzDate = new Date(tzString);
          const offsetMin = (date - tzDate) / (1000 * 60);
          const hours = Math.floor(Math.abs(offsetMin) / 60);
          const mins = Math.abs(offsetMin) % 60;
          const sign = offsetMin <= 0 ? "+" : "-";
          return `${sign}${hours}${
            mins > 0 ? `:${mins.toString().padStart(2, "0")}` : ""
          }`;
        })();
      return `GMT${offset}`;
    };

    // Setup timezones
    const tzData = [
      {
        label: "India (IST)",
        timezone: "Asia/Kolkata",
        offset: "GMT+5:30",
      },
      {
        label: userLocationName,
        timezone: userTimezone,
        offset: getGMTOffset(userTimezone),
      },
    ];

    setTimezones(tzData);
  }, []);

  useEffect(() => {
    if (timezones.length === 0) return;

    const updateTimes = () => {
      const times = {};
      timezones.forEach((tz) => {
        const date = new Date();
        times[tz.timezone] = {
          date: date.toLocaleDateString("en-US", {
            timeZone: tz.timezone,
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          time: date.toLocaleTimeString("en-US", {
            timeZone: tz.timezone,
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        };
      });
      setCurrentTimes(times);
    };

    // Update immediately
    updateTimes();

    // Update every second
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, [timezones]);

  if (timezones.length === 0) {
    return <div className="timezone-container">Loading timezones...</div>;
  }

  return (
    <div>
      <div className="timezone-container">
        {timezones.map((tz, index) => (
          <div key={index} className="timezone-card">
            <div className="timezone-info">
              <div className="timezone-label">{tz.label}</div>
              <div className="timezone-offset">{tz.offset}</div>
            </div>
            <div className="timezone-date">
              {currentTimes[tz.timezone]?.date || "Loading..."}
            </div>
            <div className="timezone-time">
              {currentTimes[tz.timezone]?.time || "Loading..."}
            </div>
          </div>
        ))}
      </div>
      {timeDifference && (
        <p className="time-difference">
          <em>{timeDifference}</em>
        </p>
      )}
    </div>
  );
};

export default TimezoneDisplay;
