export function convertAmount(num: string): string {
  const amount = parseInt(num);
  var million = Math.floor(amount / 1000000);
  var thousand = (amount % 1000000) / 1000;
  return million + ' triệu ' + thousand + ' nghìn';
}
