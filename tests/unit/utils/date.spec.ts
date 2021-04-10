import { humanizeDuration } from "@/utils/date";

describe("Date utils", () => {
  test.each([
    [
      {
        timeRange: {
          startDate: "01/23/2007",
          endDate: "03/25/2021",
        },
        expectedFormat: "14y 2m",
      },
    ],
    [
      {
        timeRange: {
          startDate: "01/13/2007",
          endDate: "01/25/2007",
        },
        expectedFormat: "12d",
      },
    ],
    [
      {
        timeRange: {
          startDate: "05/13/2007",
          endDate: "09/25/2007",
        },
        expectedFormat: "4m",
      },
    ],
    [
      {
        timeRange: {
          startDate: "05/13/2007",
          endDate: "05/13/2025",
        },
        expectedFormat: "18y",
      },
    ],
    [
      {
        timeRange: {
          startDate: "03/21/2021",
          endDate: "04/10/2021",
        },
        expectedFormat: "20d",
      },
    ],
  ])(
    "should humanize a period duration properly",
    ({ timeRange, expectedFormat }) => {
      const duration: number =
        new Date(timeRange.endDate).getTime() -
        new Date(timeRange.startDate).getTime();
      expect(humanizeDuration(duration)).toEqual(expectedFormat);
    }
  );
});
