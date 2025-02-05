function updateClock() {  
    const now = new Date();  
    let hours = now.getHours();  
    const minutes = String(now.getMinutes()).padStart(2, '0');  
    const seconds = String(now.getSeconds()).padStart(2, '0');  
    const ampm = hours >= 12 ? 'PM' : 'AM';  
    hours = hours % 12;  
    hours = hours ? String(hours).padStart(2, '0') : '12';  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;  
    document.getElementById('clock').textContent = timeString;  
}  

function updateCountdown() {  
    const now = new Date();  
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25  
    
    if (now > christmas) {  
        christmas.setFullYear(christmas.getFullYear() + 1);  
    }  
    
    const diff = christmas - now;  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);  
    document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;  
}  

setInterval(updateClock, 1000);  
setInterval(updateCountdown, 1000);  
updateClock();  
updateCountdown();  
