export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' } as const;
    const formattedDate = date.toLocaleDateString('en-GB', options);
    
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"];
    const index = (day % 10 > 0 && day % 10 < 4 && (day < 10 || day > 20)) ? day % 10 : 0;
    const dayWithOrdinal = day + (suffix[index] || "th");
    
    return formattedDate.replace(String(day), dayWithOrdinal);
  }
  