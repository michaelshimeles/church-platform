import { useQuery } from "@tanstack/react-query";
import * as Sentry from "@sentry/nextjs";

async function fetchDonations(emailAddress: string) {
  const transaction = Sentry.startTransaction({
    name: "Getting Financial Donations Info",
  });

  Sentry.configureScope((scope) => {
    scope.setSpan(transaction);
  });

  try {
    const response = await fetch(`/api/payments/info`, {
      method: "POST",
      body: JSON.stringify({
        emailAddress,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  } finally {
    transaction.finish();
  }
}

export const useGetDonations = (emailAddress: string, user: any) => {
  return useQuery({
    queryKey: ["get-donations", user],
    queryFn: () => fetchDonations(emailAddress),
  });
};
