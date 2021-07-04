import styled from "styled-components"
import {palette} from "../../../../components/styleguide/atoms/colors"
export const StyledCard = styled.li`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 155px 80px;
    grid-template-areas:
        'image'
        'text'
        'stats';
    font-family: 'roboto', sans-serif;
    border-radius: 18px;
    background: #fff;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 90%);
    text-align: center;
    max-width: 300px;

    .card__image{
        grid-area: image;
        border-top-left-radius:15px;
        border-top-right-radius: 18px;
        background-size: cover;
    }
`
export const CardText = styled.div`
    grid-area: text;
    margin: 8px 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
        .breed{
            color: ${palette.primary.dark};
        }

        h2{
            margin-top: 0px;
            font-size: 28px;
            color: #000 !important;
        }
        p{
            color: #0f0f0f;
            font-size: 15px;
            font-weight: 300;
            line-height: 1;
        }

`

export const CardStats = styled.div`
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background:${palette.primary.main};

    .card__stat{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        color: #fff;

        .type{
            font-size: 11px;
            font-weight: 300;
            text-transform: uppercase;
        }

        .value{
            font-size: 22px;
            font-weight: 500;
            sup{
                font-size: 12px;
            }
        }
        &.border{
            border-right: 1px solid rgb(64, 73.5, 120.5);
        }
    }
`