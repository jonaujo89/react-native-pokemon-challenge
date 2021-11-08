import styled from "styled-components/native";

/* Examples:
 * *  <Spacer m={20} />             //   margin: 20px;
 * *  <Spacer p={20} mb={15} />     //   padding: 20px; & margin-bottom: 15px;
 * *  <Spacer pr={25} pt={34} />    //   padding-right: 25px; & padding-top: 34px;
 */

const Spacer = styled.View`
  margin: ${({ m = 0, mt = 0, mr = 0, mb = 0, ml = 0, mx = 0, my = 0 }) =>
    `${mt || my || m}px ${mr || mx || m}px ${mb || my || m}px ${
      ml || mx || m
    }px`};
  padding: ${({ p = 0, pt = 0, pr = 0, pb = 0, pl = 0, px = 0, py = 0 }) =>
    `${pt || py || p}px ${pr || px || p}px ${pb || py || p}px ${
      pl || px || p
    }px`};
`;

export default Spacer;
