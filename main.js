const charts = [
  { id: '#chart-0',  spec: 'charts/00-bay-locator.vg.json' },
  { id: '#chart-1',  spec: 'charts/01-beach-locations.vg.json' },
  { id: '#chart-2',  spec: 'charts/02-avg-quality-map.vg.json' },
  { id: '#chart-7',  spec: 'charts/07-ranking-bar.vg.json' },
  { id: '#chart-3',  spec: 'charts/03-seasonal-heatmap.vg.json' },
  { id: '#chart-5',  spec: 'charts/05-beach-eras-dumbbell.vg.json' },
  { id: '#chart-8',  spec: 'charts/08-risk-calendar.vg.json' },
  { id: '#chart-4',  spec: 'charts/04-rainfall-scatter.vg.json' },
  { id: '#chart-6',  spec: 'charts/06-rain-bucket-bar.vg.json' },
  { id: '#chart-9',  spec: 'charts/09-region-box.vg.json' },
  { id: '#chart-10', spec: 'charts/10-decision-matrix.vg.json' },
];

const embedOptions = {
  actions: false,
  renderer: 'svg',
  config: {
    background: 'transparent',
  }
};

charts.forEach(({ id, spec }) => {
  vegaEmbed(id, spec, embedOptions)
    .catch(err => {
      console.error(`Failed to render ${id}:`, err);
      const el = document.querySelector(id);
      if (el) el.innerHTML = `<div class="chart-error">Chart failed to load: ${err.message}</div>`;
    });
});
