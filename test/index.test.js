const { 
  getWeekStart, 
  getWeekEnd, 
  getFy, 
  getFyMonth, 
  getFyStart, 
  getFyEnd, 
  getQtr, 
  getTaxQtr, 
  getFyDuration,
  tomorrow,
  today,
  yesterday,
  lastWeek
} = require('../src');



describe('.getWeekStart', () => {

  test('2024-01-01', () => expect(getWeekStart('2024-01-01')).toBe('2024-01-01'));
  test('2024-01-02', () => expect(getWeekStart('2024-01-02')).toBe('2024-01-01'));
  test('2024-01-03', () => expect(getWeekStart('2024-01-03')).toBe('2024-01-01'));
  test('2024-01-04', () => expect(getWeekStart('2024-01-04')).toBe('2024-01-01'));
  test('2024-01-05', () => expect(getWeekStart('2024-01-05')).toBe('2024-01-01'));
  test('2024-01-06', () => expect(getWeekStart('2024-01-06')).toBe('2024-01-01'));
  test('2024-01-07', () => expect(getWeekStart('2024-01-07')).toBe('2024-01-01'));

  test('2024-02-01', () => expect(getWeekStart('2024-02-01')).toBe('2024-01-29')); // Feb → Jan

});

describe('.getWeekEnd', () => {

  test('2024-01-01', () => expect(getWeekEnd('2024-01-01')).toBe('2024-01-07'));
  test('2024-01-02', () => expect(getWeekEnd('2024-01-02')).toBe('2024-01-07'));
  test('2024-01-03', () => expect(getWeekEnd('2024-01-03')).toBe('2024-01-07'));
  test('2024-01-04', () => expect(getWeekEnd('2024-01-04')).toBe('2024-01-07'));
  test('2024-01-05', () => expect(getWeekEnd('2024-01-05')).toBe('2024-01-07'));
  test('2024-01-06', () => expect(getWeekEnd('2024-01-06')).toBe('2024-01-07'));
  test('2024-01-07', () => expect(getWeekEnd('2024-01-07')).toBe('2024-01-07'));

  test('2024-01-31', () => expect(getWeekEnd('2024-01-31')).toBe('2024-02-04')); // Jan → Feb

});

describe('.getFy', () => {

  test('2024-01-01', () => expect(getFy('2024-01-01')).toBe('fy24'));
  test('2024-04-01', () => expect(getFy('2024-04-01')).toBe('fy25'));
  test('2024-03-31', () => expect(getFy('2024-03-31')).toBe('fy24'));
  test('2025-03-31', () => expect(getFy('2025-03-31')).toBe('fy25'));

});

describe('.getFyMonth', () => {

  test('2024-01-01', () => expect(getFyMonth('2024-01-01')).toBe('JAN'));
  test('2024-03-31', () => expect(getFyMonth('2024-03-31')).toBe('MAR'));
  test('2025-12-31', () => expect(getFyMonth('2025-12-31')).toBe('DEC'));

});

describe('.getFyStart', () => {

  test('2023-12-31', () => expect(getFyStart('2023-12-31')).toBe('2023-04-01'));
  test('2024-03-31', () => expect(getFyStart('2024-03-31')).toBe('2023-04-01'));
  test('2024-04-01', () => expect(getFyStart('2024-04-01')).toBe('2024-04-01'));
  test('2025-03-31', () => expect(getFyStart('2025-03-31')).toBe('2024-04-01'));

});

describe('.getFyEnd', () => {

  test('2023-12-31', () => expect(getFyEnd('2023-12-31')).toBe('2024-03-31'));
  test('2024-03-31', () => expect(getFyEnd('2024-03-31')).toBe('2024-03-31'));
  test('2024-04-01', () => expect(getFyEnd('2024-04-01')).toBe('2025-03-31'));
  test('2025-03-31', () => expect(getFyEnd('2025-03-31')).toBe('2025-03-31'));

});

describe('.getQtr', () => {

  test('2024-04-01', () => expect(getQtr('2024-04-01')).toBe('q1'));
  test('2024-07-01', () => expect(getQtr('2024-07-01')).toBe('q2'));
  test('2024-10-01', () => expect(getQtr('2024-10-01')).toBe('q3'));
  test('2025-01-01', () => expect(getQtr('2025-01-01')).toBe('q4'));

});

describe('.getTaxQtr', () => {

  test('2024-04-01', () => expect(getTaxQtr('2024-04-01')).toBe('q1'));
  test('2024-06-16', () => expect(getTaxQtr('2024-06-16')).toBe('q2'));
  test('2024-09-16', () => expect(getTaxQtr('2024-09-16')).toBe('q3'));
  test('2025-12-16', () => expect(getTaxQtr('2025-12-16')).toBe('q4'));
  test('2025-01-16', () => expect(getTaxQtr('2025-01-16')).toBe('q4'));
  test('2025-03-16', () => expect(getTaxQtr('2025-03-16')).toBe('q5'));

});

describe('.getFyDuration', () => {

  test('2024-04-01', () => expect(getFyDuration('2024-04-01')).toBe(365));
  test('2023-06-16', () => expect(getFyDuration('2023-06-16')).toBe(366));

});