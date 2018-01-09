import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Rent',
        note: '',
        amount: 150000,
        createdAt: 0
    }, {
        id: '2',
        description: 'Gas Bill',
        note: '',
        amount: 9000,
        createdAt: moment(0).subtract(3, 'days').valueOf()
    }, {
        id: '3',
        description: 'Water',
        note: '',
        amount: 6500,
        createdAt: moment(0).add(3, 'days').valueOf()
    }
];

export default expenses;