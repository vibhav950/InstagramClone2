import { users } from "./users"

let i = -1

export const posts = [
    {
        imageUrl: 'https://im.indiatimes.in/content/2021/Oct/The-Batman---A-Cinematic-History_6177f53b18244.jpeg',
        user: users[0].name,
        verified: 0,
        likes: 122,
        caption: 'He just like me fr!',
        profilePic: users[0].profile,
        comments : [
            {
                user: 'ProCoderDN23',
                comment: "Wow! Amazing work, super excited to work with you 😊"
            },
            {
                user: 'hacker_man_1234',
                comment: "I'm bout to hack yo mama 😈😈"
            },
            {
                user: "Xxepicly_trolledxX",
                comment: "Lmao bro thinks he's actually batman aint no way bruh"
            }
        ]
    },
    {
        imageUrl: 'https://stanforddaily.com/wp-content/uploads/2021/05/the-arbor-student-life_Crystal-Chen-scaled.jpg',
        user: users[1].name,
        verified: 1,
        likes: 7867,
        caption: 'Expanded options for in-person gatherings bring life back to Stanford campus. Students taking a stroll through campus at night were greeted by these colorful sights!',
        profilePic: users[1].profile,
        comments : [
            {
                user: 'ericwatson23',
                comment: "Such an amazing campus 😍😍"
            },
            {
                user: '_all_things_coding_',
                comment: "I'm part of the batch of 2027 and can confirm it is indeed amazing 😛"
            }
        ]
    },
]