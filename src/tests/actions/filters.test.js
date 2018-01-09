import moment from "moment";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";

test('should set text filter to provided value', () => {
    const action = setTextFilter('filter');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filter'
    });
});

test('should set text filter to default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set sort by to amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set sort by to date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate set start date action obj', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action obj', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});