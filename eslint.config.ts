import eslint from '@eslint/js'
import angular from 'angular-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import boundaries from 'eslint-plugin-boundaries'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'out-tsc/**',
      '.angular/**',
      'node_modules/**'
    ]
  },
  {
    plugins: {
      boundaries
    },
    settings: {
      // Элементы — папки/слои (FSD)
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app' },
        { type: 'pages', pattern: 'src/pages/:slice' },
        { type: 'widgets', pattern: 'src/widgets/:slice' },
        { type: 'features', pattern: 'src/features/:slice' },
        { type: 'entities', pattern: 'src/entities/:slice' },
        { type: 'shared', pattern: 'src/shared' }
      ],
      // Файлы — отдельные файлы (точки входа и т.п.)
      // В v7 boundaries/files просто перечисляет файлы; partialMatch не нужен
      'boundaries/files': [
        { type: 'root-entry', pattern: 'src/*.ts' }
      ]
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'allow',
          message:
            '{{file.type}} не может импортировать {{dependency.type}}',
          policies: [
            {
              from: 'shared',
              disallow: [
                'app',
                'pages',
                'widgets',
                'features',
                'entities'
              ]
            },
            {
              from: 'entities',
              disallow: ['app', 'pages', 'widgets', 'features']
            },
            {
              from: 'features',
              disallow: ['app', 'pages', 'widgets']
            },
            { from: 'widgets', disallow: ['app', 'pages'] },
            { from: 'pages', disallow: ['app'] },

            // Запрет импорта между слайсами одного слоя — НОВЫЙ синтаксис v7
            {
              from: { type: 'entities' },
              disallow: [
                { type: 'entities', slice: '!{{slice}}' }
              ],
              message:
                'Запрещен импорт из соседнего слайса entities: {{file.slice}} -> {{dependency.slice}}'
            },
            {
              from: { type: 'features' },
              disallow: [
                { type: 'features', slice: '!{{slice}}' }
              ],
              message:
                'Запрещен импорт из соседнего слайса features: {{file.slice}} -> {{dependency.slice}}'
            },
            {
              from: { type: 'widgets' },
              disallow: [
                { type: 'widgets', slice: '!{{slice}}' }
              ],
              message:
                'Запрещен импорт из соседнего слайса widgets: {{file.slice}} -> {{dependency.slice}}'
            },
            {
              from: { type: 'pages' },
              disallow: [
                { type: 'pages', slice: '!{{slice}}' }
              ],
              message:
                'Запрещен импорт из соседнего слайса pages: {{file.slice}} -> {{dependency.slice}}'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@angular-eslint/prefer-standalone': 'error',

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit' }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      '@angular-eslint/template/interactive-supports-focus':
        'off'
    }
  },
  eslintConfigPrettier
)
