// https://cdn.jsdelivr.net/gh/abhaykhawas/timmerJS-CDN/main.js

export class Timmer {
    constructor(hh=0, mm=0, ss=0) {
        this.hh = hh
        this.mm = mm
        this.ss = ss
        this.intervalId = ""
    }

    startTimmer(hrs, min, sec) {
        const intervalId = setInterval(() => {
          this.ss=this.ss+1
          if (this.ss == 60){
            this.ss = 0
            this.mm += 1
          }
          
          if (this.mm == 60){
            this.mm = 0
            this.hh += 1
          }
          if(this.ss < 10){
            document.getElementById(sec).innerHTML = "0"+this.ss  
          }
          else{
            document.getElementById(sec).innerHTML = this.ss
          }
          
          if(this.mm<10){
            document.getElementById(min).innerHTML = "0"+this.mm
          }
          else{
            document.getElementById(min).innerHTML = this.mm
          }
          
          if(this.hh<10){
            document.getElementById(hrs).innerHTML = "0"+this.hh
          }
          else{
            document.getElementById(hrs).innerHTML = this.hh          
          }
        }, 1000)
        
        this.intervalId = intervalId
    }
  
    stopTimmer(hrs, min, sec){
      clearInterval(this.intervalId)
      this.hh = 0
      this.mm = 0
      this.ss = 0
      document.getElementById(sec).innerHTML = "00"
      document.getElementById(min).innerHTML = "00"
      document.getElementById(sec).innerHTML = "00"
      
    }
  
    pauseTimmer(){
      clearInterval(this.intervalId)
    }
  
}