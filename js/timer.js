"use strict";

export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.time = this.targetDate - Date.now();
    this.timer = document.querySelector(".timer");
  }
  getDays() {
    return Math.floor(this.time / (1000 * 60 * 60 * 24));
  }
  getHours() {
    return Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  getMins() {
    return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  }
  getSecs() {
    return Math.floor((this.time % (1000 * 60)) / 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  startTimer() {
    const timerID = setInterval(() => {
      this.time = this.targetDate - Date.now();

      if (this.time < 0) {
        clearInterval(timerID);
        return;
      }

      this.renderTimer();
    }, 1000);
  }

  renderTimer() {
    const template = `
   
      <div class="field">
        <span class="value" data-value="days">${this.pad(this.getDays())}</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">${this.pad(
          this.getHours()
        )}</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">${this.pad(this.getMins())}</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">${this.pad(this.getSecs())}</span>
        <span class="label">Seconds</span>
      </div>
    `;
    this.timer.innerHTML = template;
  }

  initTimer() {
    this.renderTimer();
    this.startTimer();
  }
}
