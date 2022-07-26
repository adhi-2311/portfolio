import { Link } from "@chakra-ui/react"

const infos=[
    {
        id:1,
        command:"> adhisikha.education",
        output: "[" + "\"Btech in Computer Science from IIIT Bhubaneswar (2019-2023)\""+"]"
    },
    {
        id:2,
        command:"> adhisikha.skills",
        output: "[" + "\"Java\""+ "," + "\"HTML\"" + "," + "\"CSS\""+ "," + "\"Javascript\""+ "," + "\"React.js\""+ "," + "\"Node.js\""+ "," + "\"Express.js\""+ "," + "\"SQL\""+ "," + "\"MongoDB\""+"]"
    },
    {
        id:3,
        command:"> adhisikha.interests",
        output: "[" + "\"Poetry\""+ "," + " \"Reading technical blogs\"" + "," + "\"Spending hours on LeetCode\""+ "," + "\"Eating :)\"" + "]"
    },
    {
        id:4,
        command:"> adhisikha.codingProfiles ",
        output:  <><>[</><Link href="https://leetcode.com/adhi_2311/" isExternal>"LeetCode"</Link>
        <>,</>
        <Link href="https://codeforces.com/profile/adhi_2311/" isExternal>"Codeforces"</Link>
        <>]</></>
    }
]
export default infos