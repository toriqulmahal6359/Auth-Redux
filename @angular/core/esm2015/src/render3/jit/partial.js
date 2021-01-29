/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getCompilerFacade } from '../../compiler/compiler_facade';
import { angularCoreEnv } from './environment';
/**
 * Compiles a partial directive declaration object into a full directive definition object.
 *
 * @codeGenApi
 */
export function ɵɵngDeclareDirective(decl) {
    const compiler = getCompilerFacade();
    return compiler.compileDirectiveDeclaration(angularCoreEnv, `ng:///${decl.type.name}/ɵfac.js`, decl);
}
/**
 * Compiles a partial component declaration object into a full component definition object.
 *
 * @codeGenApi
 */
export function ɵɵngDeclareComponent(decl) {
    const compiler = getCompilerFacade();
    return compiler.compileComponentDeclaration(angularCoreEnv, `ng:///${decl.type.name}/ɵcmp.js`, decl);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaml0L3BhcnRpYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFxRCxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0M7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxJQUE4QjtJQUNqRSxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JDLE9BQU8sUUFBUSxDQUFDLDJCQUEyQixDQUN2QyxjQUFjLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUFDLElBQThCO0lBQ2pFLE1BQU0sUUFBUSxHQUFHLGlCQUFpQixFQUFFLENBQUM7SUFDckMsT0FBTyxRQUFRLENBQUMsMkJBQTJCLENBQ3ZDLGNBQWMsRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2dldENvbXBpbGVyRmFjYWRlLCBSM0RlY2xhcmVDb21wb25lbnRGYWNhZGUsIFIzRGVjbGFyZURpcmVjdGl2ZUZhY2FkZX0gZnJvbSAnLi4vLi4vY29tcGlsZXIvY29tcGlsZXJfZmFjYWRlJztcbmltcG9ydCB7YW5ndWxhckNvcmVFbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG4vKipcbiAqIENvbXBpbGVzIGEgcGFydGlhbCBkaXJlY3RpdmUgZGVjbGFyYXRpb24gb2JqZWN0IGludG8gYSBmdWxsIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9iamVjdC5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtW5nRGVjbGFyZURpcmVjdGl2ZShkZWNsOiBSM0RlY2xhcmVEaXJlY3RpdmVGYWNhZGUpOiB1bmtub3duIHtcbiAgY29uc3QgY29tcGlsZXIgPSBnZXRDb21waWxlckZhY2FkZSgpO1xuICByZXR1cm4gY29tcGlsZXIuY29tcGlsZURpcmVjdGl2ZURlY2xhcmF0aW9uKFxuICAgICAgYW5ndWxhckNvcmVFbnYsIGBuZzovLy8ke2RlY2wudHlwZS5uYW1lfS/JtWZhYy5qc2AsIGRlY2wpO1xufVxuXG4vKipcbiAqIENvbXBpbGVzIGEgcGFydGlhbCBjb21wb25lbnQgZGVjbGFyYXRpb24gb2JqZWN0IGludG8gYSBmdWxsIGNvbXBvbmVudCBkZWZpbml0aW9uIG9iamVjdC5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtW5nRGVjbGFyZUNvbXBvbmVudChkZWNsOiBSM0RlY2xhcmVDb21wb25lbnRGYWNhZGUpOiB1bmtub3duIHtcbiAgY29uc3QgY29tcGlsZXIgPSBnZXRDb21waWxlckZhY2FkZSgpO1xuICByZXR1cm4gY29tcGlsZXIuY29tcGlsZUNvbXBvbmVudERlY2xhcmF0aW9uKFxuICAgICAgYW5ndWxhckNvcmVFbnYsIGBuZzovLy8ke2RlY2wudHlwZS5uYW1lfS/JtWNtcC5qc2AsIGRlY2wpO1xufVxuIl19