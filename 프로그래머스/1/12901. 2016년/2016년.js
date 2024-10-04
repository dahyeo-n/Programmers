function solution(a, b) {
    const date = '2016-0'+ a + '-' + b;
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayOfWeek = week[new Date(date).getDay()];
    
    return dayOfWeek;
}