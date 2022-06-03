const secondHand = document.querySelector('.second-hand');
      const minHand = document.querySelector('.min-hand');

      function setDate() {
          const now = new Date ();

          //Set code for second Hand
          const seconds = now.getSeconds();
          const secondsDegrees = (seconds * 6) + 90; // 360/60 = 6 is multiplying factor for seconds hand
          secondHand.style.transform = `rotate(${secondsDegrees}deg`;

          //Set code for min Hand
          const min = now.getMinutes();
          const minDegrees = (min * 6) + ((seconds/60) * 6) + 90; 
          minHand.style.transform = `rotate(${minDegrees}deg`;

          //Set code for hour hand
          const hour = now.getHours();
          const hourDegrees = (hour *30) + (min / 2) +90;
          hourHand.style.transform = `rotate(${hourDegrees}deg`;
      }
      setInterval(setDate, 1000);
      setDate();