import { codinasionDevApiType } from "app/_types/Devs";
import { random } from "app/_functions/functions";
import BasicDevCard from "../DevelopersComp/Card/BasicDevCard";
import Box from "../LayoutsComp/Box";

const initialDev: codinasionDevApiType[] = [
    {
        user: {
            id: 12345,
            login: '0me9a',
        },
        role: "team"
    },
    {
        user: {
            id: 12345,
            login: '0me9a',
        },
        role: "team"
    }
]

export default function AsideContributors({ contributors }: { contributors: codinasionDevApiType[] | null }) {
    if (!contributors) {
        return (
            <Box
                title={"Contributors"}>
                <ul className="flex flex-wrap items-start">
                    {initialDev.map((item: codinasionDevApiType) =>
                        <li key={random()} className={"flex"}>
                            <BasicDevCard
                                data={{
                                    name: item.user.login,
                                    avatar: `https://github.com/${item.user.login}.png`,
                                    role: item.role
                                }}
                            />
                        </li>
                    )}
                </ul>
            </Box>
        );
    }

    return (
        <Box
            title={"Contributors"}>
            <ul className="flex flex-wrap items-start">
                {contributors.map((item: codinasionDevApiType) =>
                    <li key={random()} className={"flex"}>
                        <BasicDevCard
                            data={{
                                name: item.user.login,
                                avatar: `https://github.com/${item.user.login}.png`,
                                role: item.role
                            }}
                        />
                    </li>
                )}
            </ul>
        </Box>
    );
}
