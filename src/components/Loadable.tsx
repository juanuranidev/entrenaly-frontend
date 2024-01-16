import { Suspense } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
