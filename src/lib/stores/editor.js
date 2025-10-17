import { writable } from 'svelte/store';
import { validate } from '../validator.js';

// Editor content (FR-01)
export const content = writable('');

// Validation results (FR-03,04,06)
export const results = writable({ 
  valid: true, 
  errors: [], 
  warnings: [], 
  totalLines: 0 
});

// Real-time validation (FR-03)
content.subscribe((text) => {
  if (text && text.trim()) {
    const validation = validate(text);
    results.set(validation);
  } else {
    // Empty state (FR-08)
    results.set({ 
      valid: true, 
      errors: [], 
      warnings: [], 
      totalLines: 0 
    });
  }
});

// Manual validation trigger (FR-09)
export function manualValidate() {
  const text = $content;
  if (text.trim()) {
    results.set(validate(text));
  }
}