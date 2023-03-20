import { type } from 'abandonjs'
import { Template } from '../type'

export function mockFunction(template: Template) {
	if (typeof template === 'function' && type(template) === 'Function')
		return (template as (...args: any[]) => any).bind(this)(template)
	return ''
}