/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_BASE_HREF, CommonModule, HashLocationStrategy, Location, LocationStrategy, PathLocationStrategy, PlatformLocation } from '@angular/common';
import { Inject, InjectionToken, NgModule, Optional } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { $locationShim, $locationShimProvider } from './location_shim';
import { AngularJSUrlCodec, UrlCodec } from './params';
/**
 * A provider token used to configure the location upgrade module.
 *
 * @publicApi
 */
export const LOCATION_UPGRADE_CONFIGURATION = new InjectionToken('LOCATION_UPGRADE_CONFIGURATION');
const APP_BASE_HREF_RESOLVED = new InjectionToken('APP_BASE_HREF_RESOLVED');
/**
 * `NgModule` used for providing and configuring Angular's Unified Location Service for upgrading.
 *
 * @see [Using the Unified Angular Location Service](guide/upgrade#using-the-unified-angular-location-service)
 *
 * @publicApi
 */
export class LocationUpgradeModule {
    static config(config) {
        return {
            ngModule: LocationUpgradeModule,
            providers: [
                Location,
                {
                    provide: $locationShim,
                    useFactory: provide$location,
                    deps: [UpgradeModule, Location, PlatformLocation, UrlCodec, LocationStrategy]
                },
                { provide: LOCATION_UPGRADE_CONFIGURATION, useValue: config ? config : {} },
                { provide: UrlCodec, useFactory: provideUrlCodec, deps: [LOCATION_UPGRADE_CONFIGURATION] },
                {
                    provide: APP_BASE_HREF_RESOLVED,
                    useFactory: provideAppBaseHref,
                    deps: [LOCATION_UPGRADE_CONFIGURATION, [new Inject(APP_BASE_HREF), new Optional()]]
                },
                {
                    provide: LocationStrategy,
                    useFactory: provideLocationStrategy,
                    deps: [
                        PlatformLocation,
                        APP_BASE_HREF_RESOLVED,
                        LOCATION_UPGRADE_CONFIGURATION,
                    ]
                },
            ],
        };
    }
}
LocationUpgradeModule.decorators = [
    { type: NgModule, args: [{ imports: [CommonModule] },] }
];
export function provideAppBaseHref(config, appBaseHref) {
    if (config && config.appBaseHref != null) {
        return config.appBaseHref;
    }
    else if (appBaseHref != null) {
        return appBaseHref;
    }
    return '';
}
export function provideUrlCodec(config) {
    const codec = config && config.urlCodec || AngularJSUrlCodec;
    return new codec();
}
export function provideLocationStrategy(platformLocation, baseHref, options = {}) {
    return options.useHash ? new HashLocationStrategy(platformLocation, baseHref) :
        new PathLocationStrategy(platformLocation, baseHref);
}
export function provide$location(ngUpgrade, location, platformLocation, urlCodec, locationStrategy) {
    const $locationProvider = new $locationShimProvider(ngUpgrade, location, platformLocation, urlCodec, locationStrategy);
    return $locationProvider.$get();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fdXBncmFkZV9tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vdXBncmFkZS9zcmMvbG9jYXRpb25fdXBncmFkZV9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEosT0FBTyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRELE9BQU8sRUFBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBZ0NyRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQ3ZDLElBQUksY0FBYyxDQUF3QixnQ0FBZ0MsQ0FBQyxDQUFDO0FBRWhGLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQVMsd0JBQXdCLENBQUMsQ0FBQztBQUVwRjs7Ozs7O0dBTUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBOEI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1I7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFVBQVUsRUFBRSxnQkFBZ0I7b0JBQzVCLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO2lCQUM5RTtnQkFDRCxFQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQztnQkFDekUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsOEJBQThCLENBQUMsRUFBQztnQkFDeEY7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsVUFBVSxFQUFFLGtCQUFrQjtvQkFDOUIsSUFBSSxFQUFFLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3BGO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFVBQVUsRUFBRSx1QkFBdUI7b0JBQ25DLElBQUksRUFBRTt3QkFDSixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsOEJBQThCO3FCQUMvQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTlCRixRQUFRLFNBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBQzs7QUFpQ25DLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUE2QixFQUFFLFdBQW9CO0lBQ3BGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUMzQjtTQUFNLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtRQUM5QixPQUFPLFdBQVcsQ0FBQztLQUNwQjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBNkI7SUFDM0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksaUJBQWlCLENBQUM7SUFDN0QsT0FBTyxJQUFLLEtBQWEsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQ25DLGdCQUFrQyxFQUFFLFFBQWdCLEVBQUUsVUFBaUMsRUFBRTtJQUMzRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLFNBQXdCLEVBQUUsUUFBa0IsRUFBRSxnQkFBa0MsRUFDaEYsUUFBa0IsRUFBRSxnQkFBa0M7SUFDeEQsTUFBTSxpQkFBaUIsR0FDbkIsSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpHLE9BQU8saUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FQUF9CQVNFX0hSRUYsIENvbW1vbk1vZHVsZSwgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXBncmFkZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xuXG5pbXBvcnQgeyRsb2NhdGlvblNoaW0sICRsb2NhdGlvblNoaW1Qcm92aWRlcn0gZnJvbSAnLi9sb2NhdGlvbl9zaGltJztcbmltcG9ydCB7QW5ndWxhckpTVXJsQ29kZWMsIFVybENvZGVjfSBmcm9tICcuL3BhcmFtcyc7XG5cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIExvY2F0aW9uVXBncmFkZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25VcGdyYWRlQ29uZmlnIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgd2hldGhlciB0aGUgbG9jYXRpb24gdXBncmFkZSBtb2R1bGUgc2hvdWxkIHVzZSB0aGUgYEhhc2hMb2NhdGlvblN0cmF0ZWd5YFxuICAgKiBvciB0aGUgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YFxuICAgKi9cbiAgdXNlSGFzaD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBoYXNoIHByZWZpeCB1c2VkIGluIHRoZSBVUkwgd2hlbiB1c2luZyB0aGUgYEhhc2hMb2NhdGlvblN0cmF0ZWd5YFxuICAgKi9cbiAgaGFzaFByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIFVSTCBjb2RlYyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIFVSTHMuIERlZmF1bHQgaXMgdGhlIGBBbmd1bGFySlNDb2RlY2BcbiAgICovXG4gIHVybENvZGVjPzogdHlwZW9mIFVybENvZGVjO1xuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgYmFzZSBocmVmIHdoZW4gdXNlZCBpbiBzZXJ2ZXItc2lkZSByZW5kZXJlZCBhcHBsaWNhdGlvbnNcbiAgICovXG4gIHNlcnZlckJhc2VIcmVmPzogc3RyaW5nO1xuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgYmFzZSBocmVmIHdoZW4gdXNlZCBpbiBjbGllbnQtc2lkZSByZW5kZXJlZCBhcHBsaWNhdGlvbnNcbiAgICovXG4gIGFwcEJhc2VIcmVmPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgcHJvdmlkZXIgdG9rZW4gdXNlZCB0byBjb25maWd1cmUgdGhlIGxvY2F0aW9uIHVwZ3JhZGUgbW9kdWxlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX1VQR1JBREVfQ09ORklHVVJBVElPTiA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPExvY2F0aW9uVXBncmFkZUNvbmZpZz4oJ0xPQ0FUSU9OX1VQR1JBREVfQ09ORklHVVJBVElPTicpO1xuXG5jb25zdCBBUFBfQkFTRV9IUkVGX1JFU09MVkVEID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0FQUF9CQVNFX0hSRUZfUkVTT0xWRUQnKTtcblxuLyoqXG4gKiBgTmdNb2R1bGVgIHVzZWQgZm9yIHByb3ZpZGluZyBhbmQgY29uZmlndXJpbmcgQW5ndWxhcidzIFVuaWZpZWQgTG9jYXRpb24gU2VydmljZSBmb3IgdXBncmFkaW5nLlxuICpcbiAqIEBzZWUgW1VzaW5nIHRoZSBVbmlmaWVkIEFuZ3VsYXIgTG9jYXRpb24gU2VydmljZV0oZ3VpZGUvdXBncmFkZSN1c2luZy10aGUtdW5pZmllZC1hbmd1bGFyLWxvY2F0aW9uLXNlcnZpY2UpXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe2ltcG9ydHM6IFtDb21tb25Nb2R1bGVdfSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblVwZ3JhZGVNb2R1bGUge1xuICBzdGF0aWMgY29uZmlnKGNvbmZpZz86IExvY2F0aW9uVXBncmFkZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TG9jYXRpb25VcGdyYWRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMb2NhdGlvblVwZ3JhZGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9jYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAkbG9jYXRpb25TaGltLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGUkbG9jYXRpb24sXG4gICAgICAgICAgZGVwczogW1VwZ3JhZGVNb2R1bGUsIExvY2F0aW9uLCBQbGF0Zm9ybUxvY2F0aW9uLCBVcmxDb2RlYywgTG9jYXRpb25TdHJhdGVneV1cbiAgICAgICAgfSxcbiAgICAgICAge3Byb3ZpZGU6IExPQ0FUSU9OX1VQR1JBREVfQ09ORklHVVJBVElPTiwgdXNlVmFsdWU6IGNvbmZpZyA/IGNvbmZpZyA6IHt9fSxcbiAgICAgICAge3Byb3ZpZGU6IFVybENvZGVjLCB1c2VGYWN0b3J5OiBwcm92aWRlVXJsQ29kZWMsIGRlcHM6IFtMT0NBVElPTl9VUEdSQURFX0NPTkZJR1VSQVRJT05dfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUZfUkVTT0xWRUQsXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZUFwcEJhc2VIcmVmLFxuICAgICAgICAgIGRlcHM6IFtMT0NBVElPTl9VUEdSQURFX0NPTkZJR1VSQVRJT04sIFtuZXcgSW5qZWN0KEFQUF9CQVNFX0hSRUYpLCBuZXcgT3B0aW9uYWwoKV1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVMb2NhdGlvblN0cmF0ZWd5LFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIFBsYXRmb3JtTG9jYXRpb24sXG4gICAgICAgICAgICBBUFBfQkFTRV9IUkVGX1JFU09MVkVELFxuICAgICAgICAgICAgTE9DQVRJT05fVVBHUkFERV9DT05GSUdVUkFUSU9OLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUFwcEJhc2VIcmVmKGNvbmZpZzogTG9jYXRpb25VcGdyYWRlQ29uZmlnLCBhcHBCYXNlSHJlZj86IHN0cmluZykge1xuICBpZiAoY29uZmlnICYmIGNvbmZpZy5hcHBCYXNlSHJlZiAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5hcHBCYXNlSHJlZjtcbiAgfSBlbHNlIGlmIChhcHBCYXNlSHJlZiAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFwcEJhc2VIcmVmO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVVcmxDb2RlYyhjb25maWc6IExvY2F0aW9uVXBncmFkZUNvbmZpZykge1xuICBjb25zdCBjb2RlYyA9IGNvbmZpZyAmJiBjb25maWcudXJsQ29kZWMgfHwgQW5ndWxhckpTVXJsQ29kZWM7XG4gIHJldHVybiBuZXcgKGNvZGVjIGFzIGFueSkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMb2NhdGlvblN0cmF0ZWd5KFxuICAgIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIGJhc2VIcmVmOiBzdHJpbmcsIG9wdGlvbnM6IExvY2F0aW9uVXBncmFkZUNvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBvcHRpb25zLnVzZUhhc2ggPyBuZXcgSGFzaExvY2F0aW9uU3RyYXRlZ3kocGxhdGZvcm1Mb2NhdGlvbiwgYmFzZUhyZWYpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQYXRoTG9jYXRpb25TdHJhdGVneShwbGF0Zm9ybUxvY2F0aW9uLCBiYXNlSHJlZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlJGxvY2F0aW9uKFxuICAgIG5nVXBncmFkZTogVXBncmFkZU1vZHVsZSwgbG9jYXRpb246IExvY2F0aW9uLCBwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgIHVybENvZGVjOiBVcmxDb2RlYywgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkge1xuICBjb25zdCAkbG9jYXRpb25Qcm92aWRlciA9XG4gICAgICBuZXcgJGxvY2F0aW9uU2hpbVByb3ZpZGVyKG5nVXBncmFkZSwgbG9jYXRpb24sIHBsYXRmb3JtTG9jYXRpb24sIHVybENvZGVjLCBsb2NhdGlvblN0cmF0ZWd5KTtcblxuICByZXR1cm4gJGxvY2F0aW9uUHJvdmlkZXIuJGdldCgpO1xufVxuIl19