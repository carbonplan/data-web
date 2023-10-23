import { Link } from '@carbonplan/components'
import Section from '../../components/section'

# Zarr

We prefer the Zarr data format for storing our raster data products because it's simple, open, community-driven, and optimized for the cloud.

Here's a code snippet showing how to open one of our Zarr stores from the [cmip6-downscaling](https://github.com/carbonplan/cmip6-downscaling) project using the [Xarray](https://docs.xarray.dev/en/stable/) Python library:

```
import xarray as xr
xr.open_zarr('https://cpdataeuwest.blob.core.windows.net/cp-cmip/version1/data/DeepSD/ScenarioMIP.CCCma.CanESM5.ssp245.r1i1p1f1.day.DeepSD.pr.zarr')
```

For other projects, you can replace the URL provided to `open_zarr` with the appropriate dataset.

If you need a local copy of the dataset in a single file, you could write out the dataset opened by Xarray using the [`to_netcdf`](https://docs.xarray.dev/en/latest/generated/xarray.Dataset.to_netcdf.html) method.

Note that, unlike with a CSV file, you can't directly download Zarr data by clicking on a URL. A link to a Zarr store must be read by a program like the example above, and clicking on Zarr link in a web browser will result in an error message.

If you have any feedback about the accessibility of our data products, please reach out via <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>.

export default ({ children }) => <Section>{children}</Section>
