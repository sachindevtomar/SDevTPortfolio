import { Component, Input, OnChanges } from '@angular/core';
import { WorkExperience } from '../../model/ProfileDataInterfaces';

@Component({
  standalone: false,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnChanges {
  @Input() exp!: WorkExperience;
  logoFailed = false;
  companyInitials = '';

  ngOnChanges(): void {
    this.logoFailed = false;
    this.companyInitials = this.buildInitials(this.exp?.CompanyName?.toString() ?? '');
  }

  onLogoError(): void {
    this.logoFailed = true;
  }

  formatTenure(startDate: String, endDate: String): string {
    const start = this.formatMonthYear(startDate.toString());
    const end = endDate.toString() ? this.formatMonthYear(endDate.toString()) : 'Present';
    return `${start} – ${end}`;
  }

  getDateDifference(startDateString: string, endDateString: string): string {
    const startDate = new Date(startDateString);
    const endDate = endDateString ? new Date(endDateString) : new Date();
    let months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth();

    if (months < 0) {
      months = 0;
    }

    if (months >= 12) {
      const years = Math.floor(months / 12);
      const rem = months % 12;
      const yearLabel = years === 1 ? '1 year' : `${years} years`;
      return rem > 0 ? `${yearLabel} ${rem} mo` : yearLabel;
    }

    if (months === 0) {
      return '< 1 month';
    }

    return months === 1 ? '1 month' : `${months} months`;
  }

  private formatMonthYear(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  private buildInitials(name: string): string {
    const words = name
      .replace(/\(.*?\)/g, '')
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) {
      return 'CO';
    }
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  }
}
