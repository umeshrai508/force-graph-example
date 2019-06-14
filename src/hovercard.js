import * as d3 from "d3";
import {node} from "./node";
import {simulation} from "./simulation";
import {svg} from "../config";

let currentTarget = null;

const card = svg
    .append("g")
    .attr("pointer-events", "none")
    .attr("display", "none");

const cardBackground = card.append("rect")
    .attr("width", 180)
    .attr("height", 45)
    .attr("fill", "#eee")
    .attr("stroke", "#333")
    .attr("rx", 4);

const cardTextName = card
    .append("text")
    .attr("transform", "translate(8, 20)");

const cardTextPosition = card
    .append("text")
    .attr("font-size", "10")
    .attr("transform", "translate(8, 35)");

node.on("mouseover", (datum) => {

    currentTarget = d3.event.target;
    card.attr("display", "block");

    cardTextName.text(datum.name);
    cardTextPosition.text(datum.role);

    const nameWidth = cardTextName.node().getBBox().width;
    const positionWidth = cardTextPosition.node().getBBox().width;
    const cardWidth = Math.max(nameWidth, positionWidth);

    cardBackground.attr("width", cardWidth + 16);

    simulation.alphaTarget(0).restart();

});

node.on("mouseout", () => {

    card.attr("display", "none");
    currentTarget = null;

});

export const animate = () => {

    if (currentTarget) {

        const dist = currentTarget.r.baseVal.value + 3;

        const xPos = currentTarget.cx.baseVal.value + dist;
        const yPos = currentTarget.cy.baseVal.value - dist;

        card.attr("transform", `translate(${xPos}, ${yPos})`);

    }

};

