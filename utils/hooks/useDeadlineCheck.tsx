import { useEffect, useState } from "react";
import { getDeadlineDate } from "../functions/getDeadlineDate";

const useDeadlineCheck = (): boolean => {
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  useEffect(() => {
    const deadlineDate = getDeadlineDate();

    const now = new Date();

    setIsDeadlinePassed(now.getTime() > deadlineDate.getTime());
  }, []);

  return isDeadlinePassed;
};

export default useDeadlineCheck;
