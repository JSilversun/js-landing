const MILLISECONDS_IN_YEAR = 3.154e10;

export function getAge(birthDate: Date): number {
  return Math.floor(
    (new Date().getTime() - birthDate.getTime()) / MILLISECONDS_IN_YEAR
  );
}
