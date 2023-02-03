import {DateTime} from './luxon.js'

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if(firstDate>secondDate)
        secondDate = [firstDate, firstDate=secondDate][0];
    return secondDate.diff(firstDate,['years', 'months', 'days']).toObject()
}

export const diffToHTML = diff => 
`<span>
     ${diff.years ? 'years:' + diff.years: ''}
     ${diff.months ? 'months:' + diff.months: ''}
     ${diff.days ? 'days:' + diff.days: ''}
</span>`     