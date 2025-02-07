module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript 파일을 파싱하기 위해 사용
  extends: [
    'eslint:recommended', // 기본 ESLint 규칙 적용
    'plugin:react/recommended', // React 관련 규칙 적용
    'plugin:@typescript-eslint/recommended', // TypeScript 관련 규칙 적용
    'plugin:prettier/recommended', // Prettier와 충돌하는 규칙 비활성화
  ],
  parserOptions: {
    ecmaVersion: 2020, // 최신 JavaScript 문법을 지원
    sourceType: 'module', // ES6 모듈 사용
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
  rules: {
    'react/prop-types': 'off', // TypeScript에서는 prop-types를 사용하지 않음
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입을 자동으로 추론하게 설정
    '@typescript-eslint/no-explicit-any': 'warn', // 'any' 사용 경고
  },
};
