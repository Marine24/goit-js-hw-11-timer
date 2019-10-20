"use strict";

import { CountdownTimer } from "./timer.js";

const timer = new CountdownTimer({
  selector: "#timer",
  targetDate: new Date("Nov 24, 2019 16:15")
});

timer.initTimer();
