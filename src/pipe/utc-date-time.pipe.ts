import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

const dateformat = {
    'en': {full: 'YYYY-MM-DD hh:mm A', date: 'YYYY-MM-DD', time: 'hh:mm A'},
    'th': {full: 'MMMM. DD. YYYY hh:mm A', date: 'MMMM. DD. YYYY', time: 'hh:mm A'},
    'zh-cn': {full: 'YYYY年MM月DD日 hh:mm A', date: 'YYYY年MM月DD日', time: 'hh:mm A'},
    'zh-tw': {full: 'YYYY年MM月DD日 hh:mm A', date: 'YYYY年MM月DD日', time: 'hh:mm A'},
    'ja': {full: 'YYYY年MM月DD日 hh:mm A', date: 'YYYY年MM月DD日', time: 'hh:mm A'},
    'ru': {full: 'DD. MM. YYYY hh:mm A', date: 'DD. MM. YYYY', time: 'hh:mm A'}
}

@Pipe({
    name: 'utcDateTime'
})
export class TacoUtcDateTimePipe implements PipeTransform {

    transform(value: any, locale = 'en', display = 'full'): string {
        const localeFormat = dateformat[locale];
        const format = localeFormat[display] || localeFormat['full'];
        const datetime = (locale === 'th') ? moment.utc(value).add('543', 'years') : moment.utc(value);
        return moment.utc(datetime).locale(locale).format(format);
    }
}
