import moment from 'moment';

class DataTimeFormatter {

  static formatInTo({ datetime, format}){
    return moment(datetime).format(format)
   }
}

export default DataTimeFormatter;

