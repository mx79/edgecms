import {Button} from "@/components/ui/button";
import {getServerUrl} from "@/lib/server-url";
import {useMutation} from "@tanstack/react-query";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import type {ReactNode} from "react";
import FormLoader from "@/components/loaders/form-loader";

const ProviderData: Record<string, { icon: ReactNode; name: string }> = {
  google: {
    icon:
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_191_13499)">
            <path
              d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
              fill="#4285F4"
            />
            <path
              d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
              fill="#34A853"
            />
            <path
              d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
              fill="#FBBC05"
            />
            <path
              d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_191_13499">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </span>,
    name: "Google"
  },
  apple: {
    icon:
      <span>
        <svg fill="#ffffff" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.773 22.773" xmlSpace="preserve"><g
          id="SVGRepo_bgCarrier"
          strokeWidth="0"></g><g
          id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path
          d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path
          d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
      </span>,
    name: "Apple"
  }
};

type ProviderButtonProps = {
  providerId: string;
};

export const ProviderButton = (props: ProviderButtonProps) => {
  const searchParams = useSearchParams();

  const signInMutation = useMutation({
    mutationFn: () =>
      signIn(props.providerId, {
        callbackUrl: searchParams.get("callbackUrl") ?? `${getServerUrl()}/dashboard`
      })
  });

  const data = ProviderData[props.providerId];

  return (
    <Button
      className="mx-10"
      onClick={() => {
        signInMutation.mutate();
      }}
    >
      {signInMutation.isPending ? <FormLoader className="mr-2 h-4 w-4"/> : data.icon}
      <span className="ml-4 text-base">Sign in with {data.name}</span>
    </Button>
  );
};
