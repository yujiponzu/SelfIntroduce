import styled from 'styled-components';

export interface Menu {
    title: string;
    url: string;
}

interface TopMenuProps {
    menus: Menu[];
}

export const TopMenu: React.FC<TopMenuProps> = (props) => {
    const { menus } = props;
    return (
        <SMenu>
            {menus.map((menu) => (
                <Sli key={menu.title}>
                    <SA href={menu.url}>{menu.title}</SA>
                </Sli>
            ))}
        </SMenu>
    );
}

export const menus: Menu[] = [
    { title: "自己紹介", url: "#introduction" },
    { title: "研究業績", url: "#works-list" },
    { title: "学歴", url: "#educations-list" },
    { title: "インタビュー", url: "#interviews-list" },
]

const SMenu = styled.menu`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`

const Sli = styled.li`
    font-size: 16px;
    display: flex;
    list-style-type: none;
`

const SA = styled.a`
    color: #000000;
    transition: color 0.2s ease;
    &:hover {
        color:#afafaf;
    }
`
