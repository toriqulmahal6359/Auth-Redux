/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/he", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        if (i === 2 && v === 0)
            return 2;
        if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
            return 4;
        return 5;
    }
    exports.default = [
        'he',
        [['לפנה״צ', 'אחה״צ'], u, u],
        [['לפנה״צ', 'אחה״צ'], ['AM', 'PM'], u],
        [
            ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
            ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
            ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
            ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳']
        ],
        u,
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
            [
                'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר',
                'נובמבר', 'דצמבר'
            ]
        ],
        u,
        [['לפנה״ס', 'לספירה'], u, ['לפני הספירה', 'לספירה']],
        0,
        [5, 6],
        ['d.M.y', 'd בMMM y', 'd בMMMM y', 'EEEE, d בMMMM y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} בשעה {0}', u],
        ['.', ',', ';', '%', '\u200e+', '\u200e-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\u200f#,##0.00 ¤;\u200f-#,##0.00 ¤', '#E0'],
        'ILS',
        '₪',
        'שקל חדש',
        { 'BYN': [u, 'р'], 'CNY': ['\u200eCN¥\u200e', '¥'], 'ILP': ['ל״י'], 'THB': ['฿'], 'TWD': ['NT$'] },
        'rtl',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QztZQUNFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ25FLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO1lBQ3RGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzlGO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVM7Z0JBQ3ZGLFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7UUFDckQsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUM7UUFDaEQsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUMxRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUUsS0FBSyxDQUFDO1FBQ3BFLEtBQUs7UUFDTCxHQUFHO1FBQ0gsU0FBUztRQUNULEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ2hHLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG4gIGlmIChpID09PSAxICYmIHYgPT09IDApIHJldHVybiAxO1xuICBpZiAoaSA9PT0gMiAmJiB2ID09PSAwKSByZXR1cm4gMjtcbiAgaWYgKHYgPT09IDAgJiYgIShuID49IDAgJiYgbiA8PSAxMCkgJiYgbiAlIDEwID09PSAwKSByZXR1cm4gNDtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2hlJyxcbiAgW1sn15zXpNeg15TXtNemJywgJ9eQ15fXlNe016YnXSwgdSwgdV0sXG4gIFtbJ9ec16TXoNeU17TXpicsICfXkNeX15TXtNemJ10sIFsnQU0nLCAnUE0nXSwgdV0sXG4gIFtcbiAgICBbJ9eQ17MnLCAn15HXsycsICfXktezJywgJ9eT17MnLCAn15TXsycsICfXldezJywgJ9ep17MnXSxcbiAgICBbJ9eZ15XXnSDXkNezJywgJ9eZ15XXnSDXkdezJywgJ9eZ15XXnSDXktezJywgJ9eZ15XXnSDXk9ezJywgJ9eZ15XXnSDXlNezJywgJ9eZ15XXnSDXldezJywgJ9ep15HXqiddLFxuICAgIFsn15nXldedINeo15DXqdeV158nLCAn15nXldedINep16DXmScsICfXmdeV150g16nXnNeZ16nXmScsICfXmdeV150g16jXkdeZ16LXmScsICfXmdeV150g15fXnteZ16nXmScsICfXmdeV150g16nXmdep15knLCAn15nXldedINep15HXqiddLFxuICAgIFsn15DXsycsICfXkdezJywgJ9eS17MnLCAn15PXsycsICfXlNezJywgJ9eV17MnLCAn16nXsyddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ10sXG4gICAgWyfXmdeg15XXsycsICfXpNeR16jXsycsICfXnteo16UnLCAn15DXpNeo17MnLCAn157XkNeZJywgJ9eZ15XXoNeZJywgJ9eZ15XXnNeZJywgJ9eQ15XXktezJywgJ9eh16TXmNezJywgJ9eQ15XXp9ezJywgJ9eg15XXkdezJywgJ9eT16bXntezJ10sXG4gICAgW1xuICAgICAgJ9eZ16DXldeQ16gnLCAn16TXkdeo15XXkNeoJywgJ9ee16jXpScsICfXkNek16jXmdecJywgJ9ee15DXmScsICfXmdeV16DXmScsICfXmdeV15zXmScsICfXkNeV15LXldeh15gnLCAn16HXpNeY157XkdeoJywgJ9eQ15XXp9eY15XXkdeoJyxcbiAgICAgICfXoNeV15HXnteR16gnLCAn15PXptee15HXqCdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtbJ9ec16TXoNeU17TXoScsICfXnNeh16TXmdeo15QnXSwgdSwgWyfXnNek16DXmSDXlNeh16TXmdeo15QnLCAn15zXodek15nXqNeUJ11dLFxuICAwLFxuICBbNSwgNl0sXG4gIFsnZC5NLnknLCAnZCDXkU1NTSB5JywgJ2Qg15FNTU1NIHknLCAnRUVFRSwgZCDXkU1NTU0geSddLFxuICBbJ0g6bW0nLCAnSDptbTpzcycsICdIOm1tOnNzIHonLCAnSDptbTpzcyB6enp6J10sXG4gIFsnezF9LCB7MH0nLCB1LCAnezF9INeR16nXoteUIHswfScsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnXFx1MjAwZSsnLCAnXFx1MjAwZS0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICdcXHUyMDBmIywjIzAuMDDCoMKkO1xcdTIwMGYtIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnSUxTJyxcbiAgJ+KCqicsXG4gICfXqden15wg15fXk9epJyxcbiAgeydCWU4nOiBbdSwgJ9GAJ10sICdDTlknOiBbJ1xcdTIwMGVDTsKlXFx1MjAwZScsICfCpSddLCAnSUxQJzogWyfXnNe015knXSwgJ1RIQic6IFsn4Li/J10sICdUV0QnOiBbJ05UJCddfSxcbiAgJ3J0bCcsXG4gIHBsdXJhbFxuXTtcbiJdfQ==