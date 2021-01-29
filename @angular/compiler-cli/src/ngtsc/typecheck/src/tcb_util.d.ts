/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/tcb_util" />
import { AbsoluteSourceSpan, ParseSourceSpan } from '@angular/compiler';
import { ClassDeclaration } from '@angular/compiler-cli/src/ngtsc/reflection';
import * as ts from 'typescript';
import { Reference } from '../../imports';
import { FullTemplateMapping, SourceLocation, TemplateId, TemplateSourceMapping } from '../api';
/**
 * Adapter interface which allows the template type-checking diagnostics code to interpret offsets
 * in a TCB and map them back to original locations in the template.
 */
export interface TemplateSourceResolver {
    getTemplateId(node: ts.ClassDeclaration): TemplateId;
    /**
     * For the given template id, retrieve the original source mapping which describes how the offsets
     * in the template should be interpreted.
     */
    getSourceMapping(id: TemplateId): TemplateSourceMapping;
    /**
     * Convert an absolute source span associated with the given template id into a full
     * `ParseSourceSpan`. The returned parse span has line and column numbers in addition to only
     * absolute offsets and gives access to the original template source.
     */
    toParseSourceSpan(id: TemplateId, span: AbsoluteSourceSpan): ParseSourceSpan | null;
}
export declare function requiresInlineTypeCheckBlock(node: ClassDeclaration<ts.ClassDeclaration>, usedPipes: Map<string, Reference<ClassDeclaration<ts.ClassDeclaration>>>): boolean;
/** Maps a shim position back to a template location. */
export declare function getTemplateMapping(shimSf: ts.SourceFile, position: number, resolver: TemplateSourceResolver, isDiagnosticRequest: boolean): FullTemplateMapping | null;
export declare function findTypeCheckBlock(file: ts.SourceFile, id: TemplateId, isDiagnosticRequest: boolean): ts.Node | null;
/**
 * Traverses up the AST starting from the given node to extract the source location from comments
 * that have been emitted into the TCB. If the node does not exist within a TCB, or if an ignore
 * marker comment is found up the tree (and this is part of a diagnostic request), this function
 * returns null.
 */
export declare function findSourceLocation(node: ts.Node, sourceFile: ts.SourceFile, isDiagnosticsRequest: boolean): SourceLocation | null;