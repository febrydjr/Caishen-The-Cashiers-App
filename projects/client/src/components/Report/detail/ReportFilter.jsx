import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const containerOptions = {
    direction: "row",
    alignItems: "center",
    gap: 4,
};

function defaultDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
    }`;
}

function ReportFilter({ setStartDate, setEndDate }) {
    function setDefault() {
        const defaultValue = defaultDate();
        document.getElementById("start_date").value = defaultValue;
        document.getElementById("end_date").value = defaultValue;
        setStartDate(defaultValue);
        setEndDate(defaultValue);
    }

    function handleChange(event, setDate) {
        const { value } = event.target;
        setDate(value);
    }

    useEffect(() => {
        setDefault();
    }, []);

    return (
        <Flex {...containerOptions}>
            <Input
                id="start_date"
                type="date"
                pattern=""
                onChange={(event) => handleChange(event, setStartDate)}
            />
            <Text>-</Text>
            <Input
                id="end_date"
                type="date"
                onChange={(event) => handleChange(event, setEndDate)}
            />
        </Flex>
    );
}

export default ReportFilter;
