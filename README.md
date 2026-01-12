
# Table Tennis Club Platform (Elo + Training Live) - Ideation Stage

A centralised web platform for a university table tennis club: Elo rankings, training drills, ranked training matches, live session tracking, match scheduling/availability, and admin management.

## Why
Current workflow relies on spreadsheets with a combination of macros. This project modernises it into a responsive web app for players and admins.

## Features
### Player
- Dashboard: Elo, attendance, weekly drills, upcoming matches/events
- Matches: upcoming + history + stats
- Training: drills to-do + ranked training matches + sign-up (matches wanted)
- LIVE: report match completion, optional score entry

### Admin
- Player management (roles: Player/Admin)
- Live session management (generate pairings, track live matches, lock session)
- Drill management (library + assignments)
- Match oversight (edit results, import BUCS fixtures, etc.)
- Analytics & reports
- Events/social management
- System settings (K-factor, tiers, etc.)

## Tech Stack (planned)
- Frontend: React + Tailwind
- Backend: Python (Flask or Django), REST API
- Database: PostgreSQL (later), SQLite for development
- Auth: Admin-created accounts (no public signup)

## UI / Prototypes
See: `docs/ui/` and `docs/flows/`

## Roadmap
- [ ] MVP: Auth + Leaderboard + Training signup + Admin player management
- [ ] Live training sessions
- [ ] Drills + completion tracking
- [ ] Analytics + events
- [ ] Deployment (CI/CD)

## Status
Early design + architecture stage. Implementation starting at a later time. Currently learning Python flask and React.

