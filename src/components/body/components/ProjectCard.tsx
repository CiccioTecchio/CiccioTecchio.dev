import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

type ProjectCardProps = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string;
  url?: string;
  repoUrl?: string;
};

export default function ProjectCard({
  name,
  description,
  startDate,
  endDate,
  committedBy,
  url,
  repoUrl,
}: ProjectCardProps) {
  return (
    <Card
      elevation={0}
      className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
      sx={{ borderRadius: "1.75rem" }}
    >
      <CardContent className="flex-1 !p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              {startDate} - {endDate}
            </p>
          </div>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-700">
            {committedBy}
          </span>
        </div>

        <p className="mt-6 text-base leading-8 text-slate-600">{description}</p>
      </CardContent>

      {repoUrl ? (
        <CardActions className="!px-6 !pb-6 !pt-0">
          <Button
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<GitHubIcon />}
            variant="contained"
            sx={{
              borderRadius: "999px",
              backgroundColor: "#111827",
              color: "#f8fafc",
              px: 2,
              "&:hover": {
                backgroundColor: "#1f2937",
              },
            }}
          >
            Repo
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
