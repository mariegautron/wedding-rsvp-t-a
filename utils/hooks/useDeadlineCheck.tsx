import { useEffect, useState } from "react";

const useDeadlineCheck = (): boolean => {
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const deadline = process.env.REACT_APP_DEADLINE_DATE || "";

  useEffect(() => {
    if (deadline) {
      const deadlineDate = new Date(deadline);
      const now = new Date();
      setIsDeadlinePassed(now.getTime() > deadlineDate.getTime());
    }
  }, [deadline]);

  return isDeadlinePassed;
};

export default useDeadlineCheck;
