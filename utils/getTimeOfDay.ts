import { DayTime } from "@/enums";
import moment from "moment";


export function getTimeOfDay() {
        let currenthour = moment().format("hh");
        let hour = Number(currenthour)
        
        if (hour >= 1 && hour < 3){
            return DayTime.DAY;
        } else if (hour >= 4 && hour < 12){
            return DayTime.NIGHT;
        }
      
}