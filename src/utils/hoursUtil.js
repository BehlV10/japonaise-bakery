// Calculates real-time open/closed status for Japonaise Bakery in Boston Time (America/New_York)
export function getBakeryStatus() {
  try {
    const now = new Date();
    // Format to Boston time
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    const day = parts.find(p => p.type === 'weekday')?.value || 'Monday';
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
    const currentMinutes = hour * 60 + minute;

    // Open Thurs-Sun: 8:00 AM (480 min) to 8:00 PM (1200 min)
    const openDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
    const isOpenDay = openDays.includes(day);

    if (isOpenDay) {
      if (currentMinutes >= 480 && currentMinutes < 1200) {
        return {
          isOpen: true,
          badgeText: "Open Today until 8:00 PM",
          detail: `Open now (${day}) · Closes at 8:00 PM EST`,
          color: "bg-emerald-500"
        };
      } else if (currentMinutes < 480) {
        return {
          isOpen: false,
          badgeText: "Opens Today at 8:00 AM",
          detail: `Currently closed · Opens at 8:00 AM EST`,
          color: "bg-amber-500"
        };
      }
    }

    // Closed today (Mon, Tue, Wed) or after 8pm
    let nextOpen = "Thursday at 8:00 AM";
    if (day === 'Thursday' && currentMinutes >= 1200) nextOpen = "Friday at 8:00 AM";
    if (day === 'Friday' && currentMinutes >= 1200) nextOpen = "Saturday at 8:00 AM";
    if (day === 'Saturday' && currentMinutes >= 1200) nextOpen = "Sunday at 8:00 AM";

    return {
      isOpen: false,
      badgeText: `Closed Now · Opens ${nextOpen}`,
      detail: `Closed today (${day}) · Regular hours: Thu–Sun 8AM–8PM`,
      color: "bg-stone-500"
    };
  } catch (e) {
    return {
      isOpen: true,
      badgeText: "Thu–Sun: 8:00 AM – 8:00 PM",
      detail: "Thu–Sun: 8:00 AM – 8:00 PM (Mon–Wed Closed)",
      color: "bg-emerald-500"
    };
  }
}
