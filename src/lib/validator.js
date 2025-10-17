import parser from 'docker-file-parser';

export function validate(dockerfileText) {
  if (!dockerfileText.trim()) {
    return { valid: true, errors: [], warnings: [], totalLines: 0 };
  }

  try {
    const commands = parser.parse(dockerfileText, { includeComments: false });  // Parse
    const errors = [];
    const warnings = [];

    commands.forEach((cmd) => {
      const { name, args, line } = cmd;  // line is 1-indexed
      
      // FROM validation
      if (name === 'FROM' && (!args || args.length === 0)) {
        errors.push({ line, type: 'error', message: 'FROM requires image name' });
      }

      // RUN validation
      if (name === 'RUN' && (!args || args.length === 0)) {
        errors.push({ line, type: 'error', message: 'RUN requires command' });
      }

      // COPY validation
      if (name === 'COPY' && (!args || args.length < 2)) {
        errors.push({ line, type: 'error', message: 'COPY requires source and destination' });
      }

      // Deprecated warnings
      if (name === 'MAINTAINER') {
        warnings.push({ line, type: 'warning', message: 'MAINTAINER is deprecated, use LABEL' });
      }
    });

    return {
      valid: errors.length === 0,
      errors,
      warnings,
      totalLines: dockerfileText.split('\n').length
    };
  } catch (error) {
    return {
      valid: false,
      errors: [{ line: 1, type: 'error', message: `Parse error: ${error.message}` }],
      warnings: []
    };
  }
}