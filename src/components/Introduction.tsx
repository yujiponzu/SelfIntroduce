import styled from 'styled-components';
import { SNSList } from './ForList';
import { SNSs } from '../WorksAndEducations';

export const Introduction: React.FC = () => {
    return (
        <>
            <Sul>
                <Sli>
                    <SName>植田 雄士</SName>
                </Sli>
                <Sli>
                    <SNSList sns={SNSs} />
                </Sli>
            </Sul>
            <IntroSentence />
        </>
    )
}

const SName = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #000000;
`

const Sli = styled.li`
    list-style-type: none;
    display: inline-flex;
    margin: 0 5px;
`

const Sul = styled.ul`
    display: flex;
`

const IntroSentence: React.FC = () => {
    return (
        <p>{text}</p>
    )
}

const text = `
2020年4月に大阪大学文学部人文学科に入学。翌年5月から約1年間長期インターンのため休学。
2022年4月に復学し、同学科の哲学思想文化学専修に配属。配属当初はトーマス・クーンやブルーノ・ラトゥールに関心を寄せていたが、
最終的には推薦アルゴリズムの発達により問題視されるようになったエコーチェンバーやフィルターバブル現象について研究を行った。
2025年3月に卒業し、翌月から奈良先端科学技術大学院大学(NAIST)先端科学技術科情報科学領域に進学。
現在は同領域内のユビキタスコンピューティングシステム研究室にて，健全な情報摂取を促進する情報的健康についての研究に従事している。
`
