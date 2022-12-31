//Only intended for development use when the real backend isn't accessible.
import img1 from "../src/assets/images/placeholder/1.jpg";
import img2 from "../src/assets/images/placeholder/2.jpg";
import img3 from "../src/assets/images/placeholder/3.jpg";

export const fakeData = [
    {
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui incidunt praesentium quia architecto quaerat ab unde quasi sapiente impedit quibusdam quos sequi sunt, eaque nemo vel voluptatibus? Est, reiciendis.",
        price: {
            raw: 59,
            formatted_with_symbol: "$59.00",
        },
        image: {
            url: img1,
        },
        categories: [
            {
                name: "Category 1",
            },
        ],
        attributes: [
            {
                name: "Author",
                value: [
                    {
                        value: "Carlos Berry",
                    },
                ],
            },
            {
                name: "File Formats",
                value: [
                    {
                        label: "FBX",
                    },
                    {
                        label: "OBJ",
                    },
                ],
            },
            {
                name: "Polygon Count",
                value: 9000,
            },
            {
                name: "Publication Date",
                value: "2021/10/21",
            },
            {
                name: "Game Ready",
                value: true,
            },
            {
                name: "Animation Ready",
                value: false,
            },
        ],
    },
    {
        name: "Thing 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quam necessitatibus assumenda corporis hic exercitationem beatae placeat tempora qui repellendus minima veritatis labore molestiae quaerat commodi, earum perferendis nulla ad.",
        price: {
            raw: 99,
            formatted_with_symbol: "$99.00",
        },
        image: {
            url: img2,
        },
        categories: [
            {
                name: "Category 1",
            },
        ],
        attributes: [
            {
                name: "Author",
                value: [
                    {
                        value: "Nellie Martin",
                    },
                ],
            },
            {
                name: "File Formats",
                value: [
                    {
                        label: "3DS Max",
                    },
                    {
                        label: "OBJ",
                    },
                ],
            },
            {
                name: "Polygon Count",
                value: 41000,
            },
            {
                name: "Publication Date",
                value: "2015/02/03",
            },
            {
                name: "Game Ready",
                value: false,
            },
            {
                name: "Animation Ready",
                value: false,
            },
        ],
    },
    {
        name: "Item 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores non soluta assumenda tempore laborum velit itaque sint enim vel neque expedita similique, repellat quidem iure. Blanditiis suscipit nulla assumenda!",
        price: {
            raw: 299,
            formatted_with_symbol: "$299.00",
        },
        image: {
            url: img3,
        },
        categories: [
            {
                name: "Category 2",
            },
        ],
        attributes: [
            {
                name: "Author",
                value: [
                    {
                        value: "Jennifer Bennett",
                    },
                ],
            },
            {
                name: "File Formats",
                value: [
                    {
                        label: "FBX",
                    },
                    {
                        label: "Cinema 4D",
                    },
                    {
                        label: "Blender",
                    },
                ],
            },
            {
                name: "Polygon Count",
                value: 13000,
            },
            {
                name: "Publication Date",
                value: "2018/08/23",
            },
            {
                name: "Game Ready",
                value: true,
            },
            {
                name: "Animation Ready",
                value: true,
            },
        ],
    },
    {
        name: "Collectible 4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui rem modi pariatur ratione, fugit rerum magnam, iste earum excepturi quibusdam totam adipisci corporis, voluptate quis! Quis tenetur ipsa facilis fuga.",
        price: {
            raw: 199,
            formatted_with_symbol: "$199.00",
        },
        image: {
            url: img2,
        },
        categories: [
            {
                name: "Category 4",
            },
        ],
        attributes: [
            {
                name: "Author",
                value: [
                    {
                        value: "Ben Mcdonalid",
                    },
                ],
            },
            {
                name: "File Formats",
                value: [
                    {
                        label: "Blender",
                    },
                    {
                        label: "OBJ",
                    },
                ],
            },
            {
                name: "Polygon Count",
                value: 6000,
            },
            {
                name: "Publication Date",
                value: "2020/02/07",
            },
            {
                name: "Game Ready",
                value: true,
            },
            {
                name: "Animation Ready",
                value: true,
            },
        ],
    },
    {
        name: "Figurine 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem provident nobis mollitia magnam nihil officia tempora. Explicabo nam esse sapiente tempora nisi ab magnam omnis sint facilis, nesciunt reprehenderit quibusdam!",
        price: {
            raw: 599,
            formatted_with_symbol: "$599.00",
        },
        image: {
            url: img1,
        },
        categories: [
            {
                name: "Category 4",
            },
        ],
        attributes: [
            {
                name: "Author",
                value: [
                    {
                        value: "Bella Alexander",
                    },
                ],
            },
            {
                name: "File Formats",
                value: [
                    {
                        label: "FBX",
                    },
                    {
                        label: "3DS Max",
                    },
                    {
                        label: "Cinema 4D",
                    },
                ],
            },
            {
                name: "Polygon Count",
                value: 24000,
            },
            {
                name: "Publication Date",
                value: "2019/11/05",
            },
            {
                name: "Game Ready",
                value: false,
            },
            {
                name: "Animation Ready",
                value: false,
            },
        ],
    },
];

export const fakeAttributes = {
    data: [
        {
            name: "File Formats",
            type: "options",
            options: [
                {
                    label: "Blender",
                },
                {
                    label: "3DS Max",
                },
                {
                    label: "FBX",
                },
                {
                    label: "OBJ",
                },
                {
                    label: "Cinema 4D",
                },
            ],
        },
        {
            name: "Author",
            type: "options",
            options: [
                {
                    label: "Bella Alexander",
                },
                {
                    label: "Ben Mcdonalid",
                },
                {
                    label: "Jennifer Bennett",
                },
                {
                    label: "Nellie Martin",
                },
                {
                    label: "Jesus Butler",
                },
                {
                    label: "Carlos Berry",
                },
            ],
        },
        {
            name: "Publication Date",
            type: "date",
        },
        {
            name: "Game Ready",
            type: "checkbox",
        },
        {
            name: "Animation Ready",
            type: "checkbox",
        },
        {
            name: "Polygon Count",
            type: "number",
        },
    ]
}

export const fakeCategories = {
    data: [
        {
            name: "Category 1",
            description: "Things belonging to category 1.",
        },
        {
            name: "Category 2",
            description: "Things belonging to category 2.",
        },
        {
            name: "Category 3",
            description: "Things belonging to category 3.",
        },
        {
            name: "Category 4",
            description: "Things belonging to category 4.",
        },
        {
            name: "Category 5",
            description: "Things belonging to category 5.",
        },
    ]
}