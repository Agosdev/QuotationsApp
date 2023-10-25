import { DayTime } from "@/enums";
import moment from "moment";


export function getTimeOfDay() {
        let currenthour = moment().format("hh");
        let hour = Number(currenthour)
        
        if (hour >= 1 && hour < 6){
            return DayTime.DAY;
        } else if (hour >= 7 && hour < 11){
            return DayTime.NIGHT;
        }
      
}