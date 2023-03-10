export const getIsRequiredMsgByField = (field: string): string => `"${field}" is required`;

export const getMinLengthMsgByFieldAndMinLength = (
  field: string,
  minLength: number,
): string => `"${field}" length must be at least ${minLength} characters long`;

export const getMustBeStringMsgByField = (field: string): string => `"${field}" must be a string`;

export const getMustBeNumberMsgByField = (field: string): string => `"${field}" must be a number`;

export const getMustBeGreaterOrEqualToMsgByFieldAndNum = (
  field: string,
  num: number,
): string => `"${field}" must be greater than or equal to ${num}`;