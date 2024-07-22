"use client";
import React from 'react';

function Accordion() {
    const [isOpen, setIsOpen] = React.useState(false);
    const accordionData = [
        {
            title: 'Section 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];
    const AccordionItem = ({title,content}) => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <div>
                <div onClick={() => setIsOpen(!isOpen)}>
                <div>{title}</div>
                <div>{isOpen ? "-" : "+"}</div>
                </div>
                {isOpen && <div>{content}</div>}
            </div>
        )
    }
    return (
        <div>
            {accordionData.map(({title, content}) => (
                <AccordionItem key={title} title={title} content={content} />
            ))}
        </div>
    );
}

export default Accordion;