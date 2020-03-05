export const dailyData = [
    {
        name: 'raindow',
        data: [
            0, 41 // 3.4
        ]
    },
    {
        name: '青',
        data: [
            0, 53
        ]
    },
    {
        name: '呼呼大魔王',
        data: [
            35, 43
        ]
    },
    {
        name: '拾饵',
        data: [
            34, 30
        ]
    },
    {
        name: 'Yoyo',
        data: [
            35, 40
        ]
    },
    {
        name: '珠峰之风',
        data: [
            36, 30
        ]
    },
    {
        name: 'Saniac',
        data: [
            38, 34
        ]
    },
    {
        name: '王成鹏',
        data: [
            54, 48
        ]
    },
    {
        name: '芳',
        data: [
            31, 32
        ]
    },
    {
        name: '华秋-雪愁',
        data: [
            32, 34
        ]
    },
    {
        name: 'Ayaan!',
        data: [
            39, 31
        ]
    },
    {
        name: 'hellen',
        data: [
            0, 33 
        ]
    },
];

export const meta = {
    height: 2658,
    width: 3993,
    startDate: '2020-03-04',
    picAddr: 'https://paddlecloud-ui.cdn.bcebos.com/dist/pic/star.jpg'
};

export const common = {
    max: 45,
    min: 0
};

export const getOpacity = value => {
    // return Math.random();
    const {min, max} = common;
    if (!value) {
        return 1;
    }
    if (value <= min) {
        return 1;
    }
    if (value >= max) {
        return 0;
    }
    return (value - min) / (max - min);
}