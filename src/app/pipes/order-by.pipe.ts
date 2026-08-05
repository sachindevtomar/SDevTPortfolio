import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'orderBy',
  pure: true
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[] | null | undefined, propertyName: string): any[] {
    if (!value?.length) {
      return [];
    }
    if (!propertyName) {
      return value;
    }
    return [...value].sort((a: any, b: any) => {
      const left = Number(a?.[propertyName]);
      const right = Number(b?.[propertyName]);
      if (Number.isFinite(left) && Number.isFinite(right)) {
        return left - right;
      }
      return String(a?.[propertyName] ?? '').localeCompare(String(b?.[propertyName] ?? ''));
    });
  }
}
